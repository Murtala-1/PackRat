import { NoDestinationFoundWithThatIDError } from '../../helpers/errors';
import { responseHandler } from '../../helpers/responseHandler';
import { getDestinationService } from '../../services/osm/osm.service';

/**
 * Retrieves the destination based on the given ID.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {object} The retrieved destination.
 */
export const getDestination = async (req, res, next) => {
  const id = req.params.id;

  const destination = await getDestinationService(id);

  if (!destination) {
    next(NoDestinationFoundWithThatIDError);
  }

  res.locals.data = destination;
  responseHandler(res);
};
